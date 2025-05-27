import React from 'react';

const TeamMembers = () => {
  const team = [
    {
      name: 'Bruce Sutton',
      role: 'CEO - Founder',
      image: 'assets/img/other/team1.webp'
    },
    {
      name: 'Ellen Thornton',
      role: 'Spa Manager',
      image: 'assets/img/other/team2.webp'
    },
    {
      name: 'Milton Marsh',
      role: 'Products Manager',
      image: 'assets/img/other/team3.webp'
    },
    {
      name: 'Jackly Smith',
      role: 'Senior Maneger',
      image: 'assets/img/other/team1.webp'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="7.667" height="15.524" viewBox="0 0 7.667 16.524"><path fill="currentColor" d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z" transform="translate(-960.13 -345.407)"/></svg>'
    },
    // Add other social icons as needed
  ];

  return (
    <section className="team__section section--padding">
      <div className="container">
        <div className="section__heading style2 text-center mb-40">
          <h2 className="section__heading--maintitle">Our Team Member</h2>
        </div>
        <div className="team__container">
          <div className="row mb--n30">
            {team.map((member, idx) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30" key={idx}>
                <div className="team__items text-center">
                  <div className="team__thumb">
                    <img className="team__thumb--img" src={member.image} alt="team img" />
                  </div>
                  <div className="team__content">
                    <h3 className="team__content--title">{member.name}</h3>
                    <span className="team__content--subtitle">{member.role}</span>
                    <ul className="team__social d-flex justify-content-center align-items-center">
                      {socialLinks.map((link, i) => (
                        <li className="team__social--list" key={i}>
                          <a className="team__social--icon" target="_blank" rel="noreferrer" href={link.url} dangerouslySetInnerHTML={{ __html: link.icon }}></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
