export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Production server',
      status: 'online'
    },
    {
      id: 2,
      name: 'Test server',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Dev server',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    return this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
