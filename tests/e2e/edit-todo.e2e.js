'use strict';

/*global casper*/

casper.___doubleClick = function (mouse, selector) {
  mouse['doubleclick'].call(mouse, selector);
};

casper.___hover = function (mouse, selector) {
  mouse['move'].call(mouse, selector);
};

casper.test.begin('Edit Todo', 6, function suite(test) {
  var editableTodoInputSelector   = '#todo-list > ul > li.editable:nth-child(1) > input';
  var unEditableTodoInputSelector = '#todo-list > ul > li:nth-child(1) > input';
  var firstTodoListItemSelector   = '#todo-list > ul > li:nth-child(1)';

  casper.start('http://localhost:3333', function() {
    this.___hover(this.mouse, firstTodoListItemSelector);
    test.assertExists('li:hover > a.delete-todo', 'li is found');
  });

  casper.then(function() {
    this.___doubleClick(this.mouse, firstTodoListItemSelector);
    test.assertExists(editableTodoInputSelector, 'input is found');
    test.assertElementCount('div#todo-list > ul li', 3);
  });

  casper.then(function() {
    // following 2 are same
    test.assertFieldXPath('//*[@id="todo-list"]/ul/li[1]/input', 'Eat'); // xpath
    test.assertFieldCSS(editableTodoInputSelector, 'Eat'); // css selector
  });

  casper.then(function() {
    this.___doubleClick(this.mouse, firstTodoListItemSelector);
    this.sendKeys(editableTodoInputSelector, 'Eat - EDITED', { keepFocus: true });

    this.sendKeys(editableTodoInputSelector, casper.page['event'].key.Enter);
    // this.page.sendEvent("keypress", casper.page['event'].key.Enter);

    test.assertFieldCSS(unEditableTodoInputSelector, 'Eat - EDITED');
  });

  casper.run(function() {
    test.done();
  });
});
