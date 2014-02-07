<nav class="navbar navbar-default" role="navigation">
	<!-- Brand and toggle get grouped for better mobile display -->
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="#" data-toggle="popover" data-original-title="Ulixes Engine" data-content="By one Lazy-eye Developer" data-placement="bottom" onmouseover="$(this).popover('show')" onmouseout="$(this).popover('hide')">Ulixes Demo Bar</a>
		
	</div>

	<!-- Collect the nav links, forms, and other content for toggling -->

	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
			<li class="active">
				<p class="navbar-text"></p>
			</li>
			<li>
				<p class="navbar-text"></p>
			</li>

			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Options <b class="caret"></b></a>
				<ul class="dropdown-menu">
					<li>
						<a href="index.php">Example Client</a>
					</li>
					<li>
						<a href="ulixes_tester.php">Test Frame</a>
					</li>
					<li>
						<a href="#">Some other thing</a>
					</li>
					<li class="divider"></li>
					<li>
						<a href="#">Separated link</a>
					</li>
					<li class="divider"></li>
					<li>
						<a href="#">One more separated link</a>
					</li>
				</ul>
			</li>

		</ul>
		<form class="navbar-form navbar-left" role="search" action="">
			<div class="form-group">
				<input name="id" type="text" class="form-control" placeholder="User Identifier" value="<?php echo $uuid ?>">
			</div>
			<button type="submit" class="btn btn-default">
				Send
			</button>
		</form>
		<ul class="nav navbar-nav navbar-right">
			<li>
				<p class="navbar-text">
					Message From server
				</p>
			</li>
			<li>
				<a href="<?php echo ULIXES_SERVER?>">Login to Admin</a>
			</li>

		</ul>
	</div><!-- /.navbar-collapse -->
</nav>