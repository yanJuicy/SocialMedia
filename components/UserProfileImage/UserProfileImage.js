import React from 'react';
import { Image, View } from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View
      style={[
        style.userImageContainer,
        { borderRadius: props.imageDiemnsions },
      ]}
    >
      <Image
        style={{ width: props.imageDiemnsions, height: props.imageDiemnsions }}
        source={props.profileImage}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
