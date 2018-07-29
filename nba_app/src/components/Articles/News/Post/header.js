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

  const renderPostData = (date, author) => {
      return (
        <PostData data={{
          date,
          author
        }} />
      )
  }

  return (
    <div>
      {renderTeamInfo(props.teamData)}
      {renderPostData(props.date, props.author)}
    </div>
  )
}

export default Header;