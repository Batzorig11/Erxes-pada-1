import DecryptedText from "./DecryptedText";

export default function Work() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      This is Work page import DecryptedText from './DecryptedText';
      {/* Example 1: Defaults (hover to decrypt) */}
      <DecryptedText text="Hover me!" />
      {/* Example 2: Customized speed and characters */}
      <DecryptedText
        text="Customize me"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
      {/* Example 3: Animate on view (runs once) */}
      <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
        />
      </div>
    </div>
  );
}
