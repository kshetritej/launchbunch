function Clients() {
  const clients = ["Figma", "LaunchBunch"];
  const clientss = [...clients, ...clients, ...clients, ...clients, clients];
  return (
    <div className="spacy-y-5 bg-primary p-4 ">
      <h2 className="text-center text-4xl font-bold text-white">Clients who trust us.</h2>
      <h3 className="text-center text-2xl text-white">Trusted by Top Global Companies</h3>
      <div className="flex gap-3 text-5xl font-semibold flex-wrap p-10 text-gray-300 justify-center ">
        {clientss.map((client) => (
          <div key={Math.random()}>{client}</div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
