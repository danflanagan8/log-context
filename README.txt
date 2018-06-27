Log Context Module
==================
by Dan Flanagan

This is a Dev module
====================
This module is intended to make local development easier.
It is not intended to be installed on production sites.

What does it do?
================
This module logs the "context" js variable to the console
anytime that Drupal.attachBehaviors is called.

Why is this helpful?
====================
These logs can help developers when AJAX is used on the page.

When AJAX is used and you haven't leveraged context or jquery.once
in your scripts it is likely that front-end bugs will be introduced.
For example, click handlers may be applied more than once leading to
unwanted "repeating" or sometimes "destructive interference."
These bugs may be easier to diagnose if this module is installed.
