import ProfileImageView from "./ProfileImageView";

export default function ProfileImage({ onFileChange, uploadImage, avatar }) {
  return (
    <ProfileImageView
      onFileChange={onFileChange}
      uploadImage={uploadImage}
      avatar={avatar}
    />
  );
}
