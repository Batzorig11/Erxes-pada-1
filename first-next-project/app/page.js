export default function Home() {
  return (
    <div className="w-300 flex mt-10">
      <div className="">
        <h1 className="text-5xl font-bold pb-3">Hi,I'm Sagar</h1>
        <p>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="mt-10 text-gray-600">Ahmedabad, India</div>
        <div className="text-gray-600">Available for new projects</div>
        <div className="flex gap-5 mt-10">
          <img className="w-10" src="github-logo.png" />
          <img className="w-10" src="pinterest-logo.png" />
          <img className="w-10" src="play-circle.png" />
        </div>
      </div>
      <img className="h-[300px] pl-20" src="profile.jpg" />
    </div>
  );
}
