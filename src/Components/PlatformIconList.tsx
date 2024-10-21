import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../Hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
function PlatformIconList({ platform }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playStation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platform.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
}

export default PlatformIconList;
