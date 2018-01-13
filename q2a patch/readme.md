<pre dir="auto">
بسم الله الرحمن الرحیم
برای اینکه مشکل بهم ریختگی متن های فارسی و انگلیسی در این برنامه متن باز  و در تم snow-extlدرست بشه  باید 
ابتدا فایل customJs-mahdi.js 
رو در پوشه روت این برنامه قرار بدین
سپس باید این فایل جاوا اسکریپت رو توی صفحه لود کنین برای این کار باید فایل qa-theme-base.php 
رو از پوشه qa-include باز کنید و وارد تابع body  بشید
و خط آخر این تابع رو به صورت زیر تغییر بدید:
</pre>
$this->output('<script src="../customJs-mahdi.js"></script><br></body>');
<pre dir="auto">
یعنی به صورت زیر باید بشه:
</pre>
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
<pre dir="auto">
موفق و سربلند باشید و در پناه الله
</pre>
