class _ProxyObj {
	ip: string;
	ms: number;
	meta: {};
	groupId: string;


	constructor() {
		(this.ip = ""), (this.ms = -1);
		(this.meta = {}), (this.groupId = "none");
		this.meta = { unstableCount: 0 };


	}
}

export { _ProxyObj };
