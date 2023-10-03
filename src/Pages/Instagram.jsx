import "./Pages.scss";
import {IoGlobe, IoLogoGithub} from "react-icons/io5";
import {Link} from "react-router-dom";

import img1 from './../assets/spotify/spotify-1.png'

const Instagram = () => {
  return (
    <div className='page'>
        <div className="page__glow"></div>
        <div className="page__title">

        <h1 className="pg-heading-primary">Spotify Clone</h1>
            <div className="page__title-icons">
                <Link to='https://github.com/maqsudtolipov/spotify-clone'>
                    <IoLogoGithub />
                </Link>
                <Link to='https://maqsud-spotify.vercel.app/signup'>
                    <IoGlobe />
                </Link>
            </div>
        </div>
        <img src={img1} />
        <ul className="page__tags">
            <li className="page__tag" style={{color: '#00ed64'}}>MongoDB</li>
            <li className="page__tag" style={{color: '#a2a2a2'}}>Express</li>
            <li className="page__tag" style={{color: '#61DBFB'}}>React</li>
            <li className="page__tag" style={{color: '#66cc33'}}>NodeJs</li>
            <li className="page__tag" style={{color: '#CC6699'}}>SCSS</li>
            <li className="page__tag" style={{color: '#764abc'}}>Redux</li>
            <li className="page__tag" style={{color: '#f44250'}}>React Router</li>
            <li className="page__tag" style={{color: '#B7B7FF'}}>ESLint</li>
        </ul>

        <h2 className="pg-heading-secondary">Project Features</h2>
        <p className="pg-paragraph">Here're some of the project's best features:</p>
        <ul className='page__list'>
            <li>User authentication and authorization</li>
            <li>Search functionality to find songs playlists and artists</li>
            <li>Create, edit and delete playlists</li>
            <li>Play songs and control playback (play pause skip etc.)</li>
            <li>Admin page for managing songs and see statistics</li>
            <li>Listen to songs in your queue</li>
            <li>Control player with MacBook Pro touch bar</li>
        </ul>
      {/*<h1 className="pg-heading-primary">Heading 1</h1>*/}
      {/*<h2 className="pg-heading-secondary">Heading 2</h2>*/}
      {/*<h3 className="pg-heading-tertiary">Heading 3</h3>*/}
      {/*<p className="pg-paragraph">*/}
      {/*  <span className="pg-bold">*/}
      {/*    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
      {/*  </span>*/}
      {/*  industry. Lorem Ipsum has been the industry's standard dummy text ever*/}
      {/*  <span className="pg-italic">*/}
      {/*    since the 1500s, when an unknown printer took a galley of type and*/}
      {/*  </span>*/}
      {/*  scrambled it to make a type specimen book. It has survived not only five*/}
      {/*  centuries, but also the leap into electronic typesetting, remaining*/}
      {/*  essentially unchanged. It was popularised in the 1960s with the release*/}
      {/*  of Letraset sheets containing Lorem Ipsum passages, and more recently*/}
      {/*  with desktop publishing software like Aldus PageMaker including versions*/}
      {/*  of Lorem Ipsum.*/}
      {/*</p>*/}
      {/*<img*/}
      {/*  className="pg-img"*/}
      {/*  src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"*/}
      {/*/>*/}
      {/*<p className="pg-paragraph">*/}
      {/*  Lorem Ipsum is simply dummy text of the printing and typesetting*/}
      {/*  industry. Lorem Ipsum has been the industry's standard dummy text ever*/}
      {/*  since the 1500s, when an unknown printer took a galley of type and*/}
      {/*  scrambled it to make a type specimen book. It has survived not only five*/}
      {/*  centuries, but also the leap into electronic typesetting, remaining*/}
      {/*  essentially unchanged. It was popularised in the 1960s with the release*/}
      {/*  of Letraset sheets containing Lorem Ipsum passages, and more recently*/}
      {/*  with desktop publishing software like Aldus PageMaker including versions*/}
      {/*  of Lorem Ipsum.*/}
      {/*</p>*/}
      {/*<div className="pg-gallery-2">*/}
      {/*  <img*/}
      {/*    className="pg-img"*/}
      {/*    src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"*/}
      {/*  />*/}
      {/*  <img*/}
      {/*    className="pg-img"*/}
      {/*    src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};

export default Instagram;
