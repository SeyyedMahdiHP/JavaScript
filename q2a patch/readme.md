<pre dir="auto">
بسم الله الرحمن الرحیم
برای اینکه مشکل بهم ریختگی متن های فارسی و انگلیسی در این برنامه متن باز درست بشه  باید 
ابتدا فایل customJs-mahdi.js 
رو در پوشه روت این برنامه قرار بدین
سپس باید این فایل جاوا اسکریپت رو توی صفحه لود کنین برای این کار باید فایل qa-theme-base.php 
رو از پوشه qa-include باز کنید و وارد تابع body  بشید
و خط آخر این تابع رو به صورت زیر تغییر بدید:

$this->output('<script src="../customJs-mahdi.js"></script><br></body>');
یعنی به صورت زیر باید بشه:

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

خوب اگر بخواین که لینک ها تونم چپ چین بشن و بلاک کوت هاتون کمی خوشگل تر بشن کافیه اینکار زیر رو بکنید:
این تکه کد css رو ببرید 

.qa-a-item-content p a,
.entry-content p a
{direction:ltr;
text-align:left;
float:left;
}
.entry-content blockquote p::after{
    text-align: left;
     content: "";
    clear: both;
    display: table;
    
}

blockquote{
	background:#eee;
	padding:15px;
	margin:30px auto;
	border:1px solid #2b8bcb;;
	font-size:14px;
	color:#000;
	position:relative;
    
}

/* 
// 12 - CSS3 Blockquote Effects Demo
// Made with ❤ by @Pawan_Mall
// http://www.pawanmall.net 
*/

blockquote{
  display:block;
  background: #fff;
  padding: 15px 20px 15px 45px;
  margin: 0 0 20px;
  position: relative;
  
  /*Font*/
  font-family: "b nazanin" ,Georgia, serif;
  font-size: 16px;
  line-height: 1.2;
  color: #666;

  /*Box Shadow - (Optional)*/
  -moz-box-shadow: 2px 2px 15px #ccc;
  -webkit-box-shadow: 2px 2px 15px #ccc;
  box-shadow: 2px 2px 15px #ccc;

  /*Borders - (Optional)*/
  border-left-style: solid;
  border-left-width: 15px;
  border-right-style: solid;
  border-right-width: 2px;    
 
}

blockquote::before{
  content: "\201C"; /*Unicode for Left Double Quote*/
  
  /*Font*/
  font-family: Georgia, serif;
  font-size: 40px;
  font-weight: bold;
  color: #999;
  
  /*Positioning*/
  position: absolute;
  left: 10px;
  top:5px;
  
}

blockquote::after{
  /*Reset to make sure*/
  content: "";
}

blockquote a{
  text-decoration: none;
  background: #eee;
  cursor: pointer;
  padding: 0 3px;
  color: #c76c0c;
}

blockquote a:hover{
 color: #666;
}

blockquote em{
  font-style: italic;
}

بریزید توی فایل qa-style.css 
تم مورد نظرتون
موفق و سربلند باشید و در پناه الله
</pre>
