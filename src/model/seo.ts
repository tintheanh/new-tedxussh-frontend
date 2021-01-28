export interface SEO {
	title: string;
	description: string;
	canonical: string;
	site_name: string;
	url: string;
	image: {
		width: number;
		height: number;
		url: string;
	} | null;
}
