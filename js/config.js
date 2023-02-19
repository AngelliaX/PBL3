/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
CKEDITOR.editorConfig=function(e){$(".newsletter-container").size()>0?e.toolbarGroups=[{name:"clipboard",groups:["clipboard","undo"]},{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"links"}]:e.toolbarGroups=[{name:"clipboard",groups:["clipboard","undo"]},{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list"]},{name:"links"}],e.removeButtons="Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,PasteFromWord",e.forcePasteAsPlainText=!0,e.removeDialogTabs="link:target;link:advanced"};