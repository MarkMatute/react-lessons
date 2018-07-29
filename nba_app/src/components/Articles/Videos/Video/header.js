import React from 'react';
import TeamInfo from '../../Elements/teamInfo';
import PostData from '../../Elements/postData';

const Header = (props) => {

  const renderTeamInfo = (team) => {
    let template = null;
    if(team) {
      template = <TeamInfo team={team} />
    } else {
      // TODO: More Templates
    }
    return template;
  }

  return (
    <div>
      {renderTeamInfo(props.teamData)}
    </div>
  )
}

export default Header;