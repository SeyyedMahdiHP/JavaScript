<h1>Manual</h1>
<h2 dir="auto">راهنمای فارسی</h2>
<pre dir="auto">
بسم الله الرحمن الرحیم
برای اینکه مشکل بهم ریختگی متن های فارسی و انگلیسی در این برنامه متن باز  و در تم snow-extlدرست بشه  باید 
ابتدا فایل customJs-mahdi.js 
رو در پوشه روت این برنامه قرار بدین
سپس باید این فایل جاوا اسکریپت customJs-mahdi.jsرو توی صفحه لود کنین برای این کار باید فایل qa-theme-base.php 
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

<h2>En Manual</h2>
in the name of Allah
for fixing the direction of unicode ascii paraghraphs in  "snow-extl" theme, just move customJs-mahdi.js into q2a root directory, 
and then add it to "qa-theme-base.php" under function body in qa-include directory. it has to be like this:
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
