function Clients() {
  const clients = ["Figma", "LaunchBunch"];
  const clientss = [...clients, ...clients, ...clients, ...clients, clients];
  return (
    <div className="spacy-y-3 ">
      <h2 className="text-center text-2xl opacity-50">Trusted by Top Global Companies</h2>
      <div className="flex gap-3 text-6xl font-semibold flex-wrap opacity-10 justify-center ">
        {clientss.map((client) => (
          <div key={Math.random()}>{client}</div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
