import InternalHeaderView from "./InternalHeaderView";
import { useAvatarContext } from "../../contexts/AvatarContext";

export default function InternalHeader() {
  const { avatar } = useAvatarContext();
  return (
    <>
      <InternalHeaderView avatar={avatar} />
    </>
  );
}
