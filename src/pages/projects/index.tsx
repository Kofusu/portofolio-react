import { Fragment } from "react";

import AvoidHeader from "components/AvoidHeader/AvoidHeader";
import GridCard from "components/ProjectsCard/GridCard";
import styles from '../../assets/styles/pages/projects/index.module.scss';
import SectionTitle from "components/SectionTitle/SectionTitle";

const Projects: React.FC = () => {
  return (
    <Fragment>
      <AvoidHeader />
      <section className={styles.section}>
        <SectionTitle title="Front-End Projects" />
        <GridCard href="todolist" title="Redux To Do List" />
        <GridCard href="suitgame" title="VS AI - Rock Paper Scissor" />
        <GridCard href="tictactoe" title="MultiPlayer - Tic Tac Toe" />
        {/* <GridCard href="musicplayer" title="Music Searching with API" />
        <GridCard href="sortalgorihmvisualize" title="Sort Algorithm Visualize" /> */}
        
        <SectionTitle title="Other Projects" />
        <GridCard newtab href="https://rumah-sakit-sehat.000webhostapp.com/" title='Pendaftaran Rumah Sakit' />
        <GridCard newtab href="https://final-project-react-deployment.web.app//" title='Quiz Web App' />
        <GridCard newtab href="http://ginekosahabatku.net" title='Ginekologi' />
        {/* <GridCard newtab href="https://github.com/Kofusu" title="Whatsapp Clone" />
        <GridCard newtab href="https://github.com/Kofusu" title="Instagram Clone" />
        <GridCard newtab href="https://github.com/Kofusu" title="Tokopedia Clone" /> */}
      </section>
    </Fragment>
  );
};

export default Projects;
