	public function body()
	{
		$this->output('<body');
		$this->body_tags();
		$this->output('>');

		$this->body_script();
		$this->body_header();
		$this->body_content();
		$this->body_footer();
		$this->body_hidden();

		$this->output('<script src="../customJs-mahdi.js"></script><br></body>');
	}
