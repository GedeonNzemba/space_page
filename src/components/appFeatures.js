import React from "react"
import styles from "../styles/stylesheet.module.css"
import AppFeatureOption from "../components/appFeatureOption"

const appFeatures = props => {
  return (
    <div className={styles.appFeaturesContainer}>
      <div className={styles.appFeaturesImageContainer}>
      <div className={styles.imageAnimationItem}>
                  <div className={styles.visionMobileAppPic}>
                    <div
                      className={[styles.item__img, styles.item__img__t2].join(
                        " "
                      )}
                    ></div>
                  </div>
                </div>
      </div>
      <div className={styles.appFeatureCopyContainer}>
        <h1 className={styles.appFeatureHeading}>Swift App By Proper Living</h1>
        <p className={styles.appFeatureSubheading}>
          We’ve built a number of security features into our app, Swift:
        </p>
        <div className={styles.appFeatureListContainer}>
          <ul className={styles.appFeatureList}>
            <li className={styles.appFeatureListItem}>
              <div className={styles.appFeatureListHeading}>
                Incident Reporting
              </div>
              <div className={styles.appFeatureListBody}>
                On our swift app, we have thought long and hard about your
                convenience. We have built in features that allow you to report
                any issues that you may have, straight to those who are able to
                help you.
              </div>
            </li>
            <li className={styles.appFeatureListItem}>
              <div className={styles.appFeatureListHeading}>
                “Watch Me Walk In Safely” Function
              </div>
              <div className={styles.appFeatureListBody}>
                This function allows you to ask the on duty guard at 6 Nansen by
                Proper Living to come outside and walk you safely through the
                front doors. This is an extra layer of security for tenants who
                are being dropped off outside of the building or are walking
                from far.
              </div>
            </li>
            <li className={styles.appFeatureListItem}>
              <div className={styles.appFeatureListHeading}>
                SOS Button For Extreme Emergencies
              </div>
              <div className={styles.appFeatureListBody}>
                Our SOS function on our app allows our tenants to receive
                immediate help should you ever be in a dangerous situation. This
                feature may be used anywhere in South Africa and will also
                inform your emergency contact that you are in danger, it will
                send a GPS location to all the relevant responding agencies.
              </div>
            </li>
            <li className={styles.appFeatureListItem}>
              <div className={styles.appFeatureListHeading}>
                Message Building Management
              </div>
              <div className={styles.appFeatureListBody}>
                You will have direct contact with building Management through
                the app for any issues that may possibly arise. We have done
                this to streamline any concerns of our tenants.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={[styles.imageAnimationItem, styles.appFeaturesMobileAnimation].join(" ")}>
        <div className={styles.visionMainSectionContainer}>
          <div className={[styles.sectionImageContainer,styles.appPictureMobileImageContainer].join(" ")}>
            <div className={styles.visionMobileAppPic}>
              <div
                className={[styles.item__img, styles.item__img__t2].join(" ")}>
              </div>
            </div>
          </div>

          <div className={styles.sectionInfoContainer}>
            <h2 className={styles.sectionInfoHeading}>
              Swift App By Proper Living
            </h2>
            <p className={styles.sectionInfoBody}>
              We’ve built a number of security features into our app, Swift:
            </p>
          </div>

          <div className={styles.appFeatureOptionContainer}>
        <div className={styles.appFeatureOptionSubContainer}>
          <AppFeatureOption
            type={"Incident Reporting"}
            desc={
              "This allows us to quickly track and handle issues as they occur."
            }
          />
          <AppFeatureOption
            type={"Walk Me In Safely"}
            desc={"Request security to escort you to and from the premises."}
          />
          <AppFeatureOption
            type={"SOS Button"}
            desc={"Allows you to receive immediate help."}
          />
          <AppFeatureOption
            type={"Message Building Management"}
            desc={"You will have direct contact with building Management."}
          />
        </div>
      </div>
   
        </div>
      </div>
      
    </div>
  )
}
export default appFeatures
