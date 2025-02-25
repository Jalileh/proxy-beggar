class _ProxyObj {
	ip: string;
	ms: number
	meta: { [key: string]: any };
	groupId: string;

	constructor() {
		this.ip = "", this.ms = -1;
		(this.meta = {}); (this.groupId = "none");
	}
}

export { _ProxyObj };
