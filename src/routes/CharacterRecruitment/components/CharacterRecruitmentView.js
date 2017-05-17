import React from 'react'
import './CharacterRecruitmentView.scss'

export const RecruitmentCharacterListView = () => (
  <div className='container'>
    <div style={{color: 'red'}}>
      <h1>Recruitment Character list</h1>
      <p>
        - Filters (Region / Realm / Language / Faction / Role / Class / Raids per week / Days / Progress / ilvl / will
        transfer)
      </p>
      <p>
        - List of characters (Source / Name / Guild / Realm / Language / Raids per week / Role / ilvl / Progress / WCL /
        Update date)
      </p>
      <p>
        Sample : <a href="https://www.warcraftlfg.com/character/list/">https://www.warcraftlfg.com/character/list/</a>
      </p>
    </div>
  </div>
);

export default RecruitmentCharacterListView
