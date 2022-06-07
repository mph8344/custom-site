import beandip from "../../assets/sounds/beandip.mp3";
import brandonplayapek from "../../assets/sounds/brandonplayapek.mp3";
import hedontbox from "../../assets/sounds/hedontbox.mp3";
import hillaryisinhim from "../../assets/sounds/hillaryisinhim.mp3";
import mattaah from "../../assets/sounds/mattaah.mp3";
import tomsabitch from "../../assets/sounds/tomsabitch.mp3";
import kylerobbing from "../../assets/sounds/kylerobbing.mp3";
import momsgettinrailed from "../../assets/sounds/momsgettinrailed.mp3";
import tomthehealslut from "../../assets/sounds/tomthehealslut.mp3";
import tminz_woah from "../../assets/sounds/tminz_woah.mp3";
import pulledout from "../../assets/sounds/pulledout.mp3";
import elftom from "../../assets/sounds/elf_tom.mp3";

interface SoundProfile {
  sound: any;
  title: string;
}

function makeSoundProfile(sound: any, title: string): SoundProfile {
  return { sound, title };
}

const soundProfiles: SoundProfile[] = [
  makeSoundProfile(beandip, "beandip"),
  makeSoundProfile(brandonplayapek, "BrandonPlayApek"),
  makeSoundProfile(hedontbox, "hedontbox"),
  makeSoundProfile(hillaryisinhim, "hillaryisinhim"),
  makeSoundProfile(mattaah, "mattaah"),
  makeSoundProfile(tomsabitch, "tomsabitch"),
  makeSoundProfile(kylerobbing, "kylerobbing"),
  makeSoundProfile(momsgettinrailed, "momsgettinrailed"),
  makeSoundProfile(tomthehealslut, "tomthehealslut"),
  makeSoundProfile(tminz_woah, "tminz_woah"),
  makeSoundProfile(pulledout, "pulledout"),
  makeSoundProfile(elftom, "gnomeboy"),
  makeSoundProfile(null, ""),
  makeSoundProfile(null, ""),
  makeSoundProfile(null, ""),
  makeSoundProfile(null, ""),
];

export default soundProfiles;
