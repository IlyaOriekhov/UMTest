import React from "react";
import styles from "./Hero.module.css";
import sprite from "../../assets/sprite.svg";

import calendar from "../../assets/calendar.png";
import victor from "../../assets/victor.png";
import car from "../../assets/car.png";

const Hero = () => {
  const tagData = [
    { id: 1, italicText: "performance", regularText: "marketing" },
    { id: 2, italicText: "user", regularText: "experience" },
    { id: 3, italicText: "creative", regularText: "strategy" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.description}>
              <p className={styles.introText}>
                We help businesses grow and scale with our expertise in
              </p>

              <div className={styles.tagsContainer}>
                <div className={styles.tagGroup}>
                  <span className={styles.tag}>
                    <span className={styles.tagItalic}>
                      {tagData[0].italicText}
                    </span>
                    <span className={styles.tagRegular}>
                      {tagData[0].regularText}
                    </span>
                  </span>
                  <span className={styles.comma}>,</span>
                </div>

                <div className={styles.tagGroup}>
                  <span className={styles.tag}>
                    <span className={styles.tagItalic}>
                      {tagData[1].italicText}
                    </span>
                    <span className={styles.tagRegular}>
                      {tagData[1].regularText}
                    </span>
                  </span>
                  <span className={styles.and}>and</span>
                  <span className={styles.tag}>
                    <span className={styles.tagItalic}>
                      {tagData[2].italicText}
                    </span>
                    <span className={styles.tagRegular}>
                      {tagData[2].regularText}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <button className={styles.ctaButton}>
              <span className={styles.ctaText}>FREE STRATEGY CALL</span>
              <div className={styles.ctaIcon}>
                <img src={calendar} alt="calendar" />
              </div>
            </button>

            <p className={styles.reviewText}>
              <span className={styles.reviewBold}>146+ reviews.</span>
              <span className={styles.reviewMuted}>
                All chances are you'll be impressed too.
              </span>
            </p>
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
