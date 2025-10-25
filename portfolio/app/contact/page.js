export default function Contact() {
  return (
    <div className="justify-center align-middle flex-col">
      <h1 className="text-center text-2xl text-gray-600">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </h1>
      <p className="text-center font-bold text-3xl mt-10">
        reachsagarshah@gmail.com
      </p>
      <p className="text-center font-bold text-3xl mt-10">+91 8980500565</p>
      <p className="text-center mt-10 text-gray-600 text-2xl">
        You may also find me on these platforms!
      </p>
      <div className="flex justify-center gap-5 mt-10">
        <img className="w-10" src="github-logo.png" />
        <img className="w-10" src="pinterest-logo.png" />
        <img className="w-10" src="play-circle.png" />
      </div>
    </div>
  );
}
