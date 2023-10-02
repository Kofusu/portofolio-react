import AvoidHeader from "components/AvoidHeader/AvoidHeader";
import React, { Fragment } from "react";

import styles from "assets/styles/pages/projects/musicplayer.module.scss";
import TextInput from "components/MiddleInput/TextInput";
import Button from "components/Button/Button";
import useMusicFetch from "hooks/useMusicFetch";

const MusicPlayer: React.FC = () => {
  const { data, refetch, searchInput, setSearchInput, setData } =
    useMusicFetch("Attack On Titan");

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setData('Loading')
    refetch();
  };

  console.log(data);
  

  return (
    <Fragment>
      <AvoidHeader />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={submitHandler}>
          <TextInput
            state={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span>
            <Button type="submit" text="Search Music" />
          </span>
        </form>

        {data === "Loading" ? (
          <div style={{ textAlign: "center" }}>Loading</div>
        ) : (
          <div className={styles.musicContainer}>
            <section className={styles.section}>
              <h1 className={styles.title}>Tracks</h1>
              <div className={styles.trackContainer}>
                {data?.tracks.hits.map((item: any, i: number) => {
                  return (
                    <a href={item.track.url} target='_blank' rel='noreferrer' key={i} className={styles.card}>
                      <span className={styles.musicTitile}>{item.track.title}</span>
                      <img src={item.track.images.coverart} alt="" />
                    </a>
                  );
                })}
              </div>
            </section>

            <section className={styles.section}>
              <h1 className={styles.title}>Artist</h1>
              <div className={styles.artistsContainer}>
              {data?.artists.hits.map((item: any, i: number) => {
                  return (
                    <div key={i} className={styles.card}>
                      <span className={styles.musicTitile}>{item.artist.name}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MusicPlayer;
