import React from "react";
import styles from "./Hero.module.css";
import sprite from "../../assets/sprite.svg";

import calendar from "../../assets/calendar.png";
import victor from "../../assets/victor.png";
import car from "../../assets/car.png";
import brock from "../../assets/brock-wegner.png";
import frame from "../../assets/FrameBig.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.frameContainer}>
              <img src={frame} alt="Frame" className={styles.frameImage} />

              <div className={styles.frameContent}>
                <div className={styles.heroTitle}>
                  <h1 className={styles.mainTitle}>
                    BUILDING
                    <br />
                    <span className={styles.titleAccent}>DATA-DRIVEN</span>
                    <br />
                    E-COMMERCE
                    <br />
                    ON SHOPIFY
                  </h1>
                </div>

                <div className={styles.contentRow}>
                  <div className={styles.descriptionSection}>
                    <p className={styles.introText}>
                      We help businesses grow and scale
                      <br /> with our expertise in&nbsp;
                      <span className={styles.tag}>
                        <span className={styles.tagItalic}>performance</span>
                        marketing
                      </span>
                      &nbsp;,
                      <span className={styles.tag}>
                        <span className={styles.tagItalic}>user</span>
                        experience
                      </span>
                      <span className={styles.and}>&nbsp;and&nbsp;</span>
                      <span className={styles.tag}>
                        <span className={styles.tagItalic}>creative</span>
                        strategy
                      </span>
                    </p>
                  </div>

                  <div className={styles.ctaSection}>
                    <button className={styles.ctaButton}>
                      <span className={styles.ctaText}>FREE STRATEGY CALL</span>
                      <div className={styles.ctaIcon}>
                        <img src={calendar} alt="calendar" />
                      </div>
                    </button>

                    <p className={styles.reviewText}>
                      <span className={styles.reviewBold}>146+ REVIEWS.</span>
                      <span className={styles.reviewMuted}>
                        ALL CHANGES ARE YOU'LL BE IMPRESSED TOO.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.heroImage}>
              <div className={styles.imageTags}>
                <span className={styles.imageTag}>Clothing</span>
                <span className={styles.imageTag}>Meta Ads</span>
                <span className={styles.imageTag}>
                  <svg width="10" height="11">
                    <use href={`${sprite}#icon-location`} />
                  </svg>
                  &nbsp;USA
                </span>
              </div>
              <img
                src={brock}
                alt="Person working"
                className={styles.uncleImage}
              />

              <div className={styles.metricsCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <svg width="15" height="16">
                      <use href={`${sprite}#icon-calendar-clock`} />
                    </svg>
                  </div>

                  <span className={styles.cardDate}>JULY 2023 — BY TODAY</span>
                </div>

                <h3 className={styles.cardTitle}>Vintage Clothing</h3>
                <p className={styles.cardSubtitle}>
                  Online store of vintage clothes
                </p>

                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Budget:</span>
                    <span className={styles.metricValue}>$3,525.92</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Profit:</span>
                    <span className={styles.metricValue}>$44,529.57</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>ROAS:</span>
                    <span className={styles.metricValue}>1350%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <img
              src={car}
              alt="Play showreel"
              className={styles.videoThumbnail}
            />
            <div className={styles.playButtonOverlay}>
              <div className={styles.playButtonCircle}>
                <span className={styles.playText}>Play Showreel</span>
                <div className={styles.playIcon}>
                  <svg width="5" height="6">
                    <use href={`${sprite}#icon-play-show`} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.missionSection}>
          <div className="missionLeft">
            <div className={styles.missionBadge}>
              <div className={styles.badgeDot}></div>
              <span>OUR MISSION</span>
            </div>

            <div className={styles.founderInfo}>
              <div className={styles.founderImage}>
                <img src={victor} alt="Victor Terekhovskyi" />
                <div className={styles.playButton}>
                  <svg width="73" height="32">
                    <use href={`${sprite}#icon-play-work`} />
                  </svg>
                </div>
              </div>

              <div className={styles.founderDetails}>
                <h3 className={styles.founderName}>Victor Terekhovskyi</h3>
                <p className={styles.founderTitle}>Сo-founder & COO</p>
              </div>
            </div>
          </div>

          <div className="missionRight">
            <div className={styles.philosophySection}>
              <p className={styles.philosophyText}>
                We believe that by creating value for people we make the world a
                happier place.
              </p>

              <p className={styles.philosophyDescription}>
                <span className={styles.philosophyWhite}>
                  Based on our experience and innovative approach in marketing.
                  Our&nbsp;
                </span>
                <span className={styles.philosophyDark}>
                  clients implement their values and ideas, integrating
                  sustainable development into the foundation of their digital
                  business.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.achievementsSection}>
          <div className={styles.achievementCard}>
            <svg width="120" height="120">
              <use href={`${sprite}#icon-top-rated`} />
            </svg>
            <p>Top Rated Plus</p>
          </div>
          <div className={styles.achievementCard}>
            <svg width="120" height="120">
              <use href={`${sprite}#icon-reviewed`} />
            </svg>
            <p>146+ reviewed company</p>
          </div>
          <div className={styles.achievementCard}>
            <svg width="120" height="120">
              <use href={`${sprite}#icon-shopify`} />
            </svg>
            <p>Shopify partners Agency</p>
          </div>
          <div className={styles.achievementCard}>
            <svg width="120" height="120">
              <use href={`${sprite}#icon-job-success`} />
            </svg>
            <p>100% Job Success on Upwork</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
