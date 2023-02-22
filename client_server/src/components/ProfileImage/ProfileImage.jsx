import ProfileImageView from "./ProfileImageView";

export default function ProfileImage() {
  const formData = new FormData();

  function onFileChange(e) {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
    }
  }

  async function uploadImage() {
    try {
      const response = await fetch("http://localhost:8000/images/upload", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },

        body: formData,
      });

      if (response.ok) {
        console.log(response);
      } else {
        console.log("error en el registro");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProfileImageView onFileChange={onFileChange} uploadImage={uploadImage} />
  );
}
