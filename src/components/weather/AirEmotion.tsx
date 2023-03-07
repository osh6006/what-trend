import {
  BsEmojiHeartEyes,
  BsEmojiSmile,
  BsEmojiExpressionless,
  BsEmojiAngry,
} from "react-icons/bs";
import { FaRegKissWinkHeart } from "react-icons/fa";

interface air {
  airQuality: number;
}
const CommonClass = "text-7xl text-white";
export default function AirEmotion({ airQuality }: air) {
  switch (airQuality) {
    case 1:
      return <BsEmojiHeartEyes className={CommonClass} />;
    case 2:
      return <FaRegKissWinkHeart className={CommonClass} />;
    case 3:
      return <BsEmojiSmile className={CommonClass} />;
    case 4:
      return <BsEmojiExpressionless className={CommonClass} />;
    case 5:
      return <BsEmojiAngry className={CommonClass} />;
    default:
      return <div>Not Emotion</div>;
  }
}
