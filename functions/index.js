const functions = require("firebase-functions")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")

const cors = require("cors")({ origin: true })
const puppeteer = require("puppeteer")
const axios = require("axios")

const admin = require("firebase-admin")
admin.initializeApp()

const scrapeImages = async username => {
  console.log("starting for ", username)
  await axios
    .put("https://properlivingproperty.firebaseio.com/watching.json", username)
    .then(res => console.log("updated watching"))
    .catch(err => err)
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
  })
  const page = await browser.newPage()
  data = await page.goto(`https://www.instagram.com/${username}/?__a=1`)
  console.log("opened for user")
  await page.waitFor(500)
  prefix = `<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">`
    .length
  suffix = `</pre></body></html>`.length

  data = await page.content().catch(err => err)
  console.log("length: ", data.length)
  if (data.includes("Sorry, this page isn't available.")) {
    console.log("User not found")
    return []
  } else {
    await axios
      .put(
        "https://properlivingproperty.firebaseio.com/data.json",
        data.slice(prefix, data.length - suffix)
      )
      .then(res => console.log("updated data"))
      .catch(err => err)

    data = JSON.parse(data.slice(prefix, data.length - suffix))
    console.log(data)
    // capture first 8 graphql > user > edge_owner_to_timeline_media > edges[] > 0 > node > thumbnail_src
    const posts = []
    if (data.graphql.user.edge_owner_to_timeline_media.edges.length >= 8) {
      for (let index = 0; index < 8; index++) {
        let key = Math.random()
        const post = {
          thumbnail_src: data.graphql.user.edge_owner_to_timeline_media.edges[
            index
          ].node.thumbnail_src
            .split("amp;")
            .join(""),
          src: data.graphql.user.edge_owner_to_timeline_media.edges[
            index
          ].node.display_url
            .split("amp;")
            .join(""),
          is_video:
            data.graphql.user.edge_owner_to_timeline_media.edges[index].node
              .is_video,
          likes:
            data.graphql.user.edge_owner_to_timeline_media.edges[index].node
              .edge_liked_by.count,
          link: `https://www.instagram.com/p/${data.graphql.user.edge_owner_to_timeline_media.edges[index].node.shortcode}`,
          accessibility_caption:
            data.graphql.user.edge_owner_to_timeline_media.edges[index].node
              .accessibility_caption,
        }
        posts.push(post)
      }
    } else {
      console.log("User has less than 8 posts")
    }
    await browser.close()
    await axios
      .put("https://properlivingproperty.firebaseio.com/posts.json", posts)
      .then(response => console.log("updated posts"))
      .catch(err => console.log(err))
  }
  return true
}
exports.scheduledInstagramScrape = functions
  .runWith({
    timeoutSeconds: 30,
    memory: "512MB",
  })
  .region("europe-west1")
  .pubsub.schedule("every 59 minutes")
  .onRun(async context => {
    console.log("Running on schedule")
    let user = ""
    await axios
      .get("https://properlivingproperty.firebaseio.com/user.json")
      .then(response => {
        console.log("username retrieved: ", response.data)
        user = response.data
        return response
      })
      .catch(err => {
        console.log(err)
        return err
      })
    await scrapeImages(user).catch(err => err)
    return null
  })

exports.test = functions
  .region("europe-west1")
  .https.onRequest((request, response) => {
    response.send("Test response succesful")
  })

const mailer = nodemailer.createTransport({
  host: "nextstepdigital.co.za",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "jadon@nextstepdigital.co.za",
    pass: "uG;mPX.66I;7", //need to create a email dedicated to sending these and use node env for safety
  },
})

exports.contact = functions
  .runWith({
    timeoutSeconds: 10,
    memory: "512MB",
  })
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      const details = await JSON.parse(req.body)
      console.log(details)
      await axios
        .post("https://properlivingproperty.firebaseio.com/emails.json", {
          email: details.email,
          firstname: details.firstname,
          surname: details.surname,
          message: details.message,
        })
        .then(response => {
          return console.log("posted email")
        })
        .catch(err => {
          console.log(err)
          return err
        })
      return mailer.sendMail(
        {
          //handle no body as disregard to prevent spam from the link itself
          from: "info@nextstepdigital.co.za",
          to: "jadon@nextstepdigital.co.za",
          subject: details.firstname + " " + details.surname || "[No subject]",
          html: details.email + "\n" + details.message || "[No message]",
        },
        (err, info) => {
          if (err) {
            //   return res.status(500).send(err)
            // return res.json({ success: true })
            return res.status(500).send(err)
          }
          return res.send("Successfuly received contact form")
        }
      )
      ///implement redirect or static thank you page here
      ///implement redirect or static thank you page here
    })
  })

const mailerForBooking = nodemailer.createTransport({
  host: "nextstepdigital.co.za",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "jadon@nextstepdigital.co.za",
    pass: "uG;mPX.66I;7", //need to create a email dedicated to sending these and use node env for safety
  },
})

let mailList = ["zbresler@live.com"]

exports.booking = functions
  .runWith({
    timeoutSeconds: 10,
    memory: "512MB",
  })
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      const details = await JSON.parse(JSON.stringify(req.body))

      await axios
        .post("https://properlivingproperty.firebaseio.com/bookings/bookingsInfo.json", {
          email: details.email,
          fullname: details.fullname,
          time: details.time,
          date: details.date
        })
        .then(response => {
          return console.log("posted booking")
        })
        .catch(err => {
          // console.log(err)
          return err
        })

      details.selection === 1
        ? await axios
          .post("https://properlivingproperty.firebaseio.com/bookings/fullyBookedDays.json", {
            date: details.date
          })
          .then(response => {
            return console.log("posted fully booked")
          })
          .catch(err => {
            // console.log(err)
            return err
          }) :
        console.log("not fully booked")

      mailList = ["zbresler@live.com"]
      mailList.push(details.email)

      return mailerForBooking.sendMail(
        {
          //handle no body as disregard to prevent spam from the link itself
          from: "info@nextstepdigital.co.za",
          to: mailList,
          subject: "ProperLiving booking scheduled for " + details.fullname.toUpperCase() || "[No subject]",
          html: "A booking has been made for " + details.fullname + "\nConfirmed Time: " + details.date + " at " + details.time || "[No message]",
        },
        (err, info) => {
          if (err) {
            //   return res.status(500).send(err)
            // return res.json({ success: true })
            return res.status(500).send(err)
          }

          return res.send("Successfuly received booking")
        }
      )
      ///implement redirect or static thank you page here
      ///implement redirect or static thank you page here
    })
  })


exports.submitApplication = functions
  .runWith({
    timeoutSeconds: 10,
    memory: "512MB",
  })
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, async () => {
      const details = await JSON.parse(JSON.stringify(req.body))

      await axios
        .post("https://properlivingproperty.firebaseio.com/leaseApplications.json", details)
        .then(response => {
          return console.log("posted lease application")
        })
        .catch(err => {
          // console.log(err)
          return err
        })

      return mailerForBooking.sendMail(
        {
          //handle no body as disregard to prevent spam from the link itself
          from: "info@nextstepdigital.co.za",
          to: "zbresler@live.com",
          subject: "Lease Application for " + details.tenant.name.toUpperCase() + " " + details.tenant.surname.toUpperCase() || "[No subject]",
          html: "A lease application has been made" || "[No message]",
        },
        (err, info) => {
          if (err) {
            //   return res.status(500).send(err)
            // return res.json({ success: true })
            return res.status(500).send(err)
          }

          return res.send("Successfuly received application")
        }
      )
      ///implement redirect or static thank you page here
      ///implement redirect or static thank you page here
    })
  })
