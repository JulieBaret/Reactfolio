/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ProfilePicture = ({ picture }) => {
  const pictureStyle = css`
    z-index: 10;
    border-radius: 100% 100% 100% 0%;

    @media (max-width: 768px) {
      margin-bottom: 1em;
    }
  `;

  const shapeStyle = css`
    border-radius: 35% 65% 63% 37% / 30% 77% 23% 70%;

    @media (max-width: 768px) {
      margin-bottom: 1em;
    }
  `;

  return (
    <div>
      <img
        css={pictureStyle}
        className="w-32 bg-pink md:w-36 lg:w-44 2xl:w-60 -mt-4 md:-mt-0 relative"
        src={picture}
        alt="profile"
      />
      {/* <div css={shapeStyle} className='w-32 h-32 bg-red md:w-36 md:h-36 lg:w-44 lg:h-44 2xl:w-60 2xl:h-60 -mt-4 md:-mt-0 relative;'></div> */}
    </div>
  );
};

export default ProfilePicture;
