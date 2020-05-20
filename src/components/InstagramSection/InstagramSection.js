import React, { useEffect, useState } from "react"
import styles from "../../styles/stylesheet.module.css"
import axios from "axios"

const InstagramSection = props => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get("https://properlivingproperty.firebaseio.com/posts.json")
        .then(response => {
          setImages(
            Object.keys(response.data).map((key, index) => {
              return (
                <img
                  key={response.data[index].link}
                  className={styles.instagramImage}
                  src={response.data[index].src}
                  alt={response.data[index].accessibility_caption}
                  about={response.data[index].likes}
                />
              )
            })
          )
          return response
        })
        .catch(err => {
          console.log(err)
          return err
        })
    }
    fetchPosts()
  }, [])
  // console.log(images)
  return (
    <div className={styles.instagramSection}>
      <div className={styles.instagramSectionHeader}>
        {props.twelve || null}
        <p className={styles.instagramSectionHeading}>Our Pics.</p>
        {props.thirteen || null}
      </div>
      <div className={styles.instagramSectionImages}>{images}</div>
      <div className={styles.instagramSectionFooter}>
        <p className={styles.instagramSectionCta}>See more</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.6"
          height="14.3"
          viewBox="0 0 14.978 14.558"
        >
          <g
            id="Icon_awesome-arrow-right"
            data-name="Icon awesome-arrow-right"
            transform="translate(-364.236 -296.155)"
          >
            <path
              id="Path_299"
              data-name="Path 299"
              d="M379.171,303.531l-7.142,7.142a.138.138,0,0,1-.2,0l-.812-.812a.141.141,0,0,1,0-.2l5.765-5.5H364.377a.141.141,0,0,1-.141-.141v-1.177a.139.139,0,0,1,.141-.138h12.408l-5.767-5.5a.137.137,0,0,1,0-.195l.819-.819a.136.136,0,0,1,.192,0l7.147,7.139A.138.138,0,0,1,379.171,303.531Z"
              fill="#001a7d"
            />
          </g>
        </svg>
      </div>
      {props.fourteen || null}
    </div>
  )
}
export default InstagramSection
