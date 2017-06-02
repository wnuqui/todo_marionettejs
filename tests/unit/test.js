describe('TodoApp', function () {
  describe('Todo', function() {
    context('initialize', function() {
      var todo;

      it('defaults status to "New"', function() {
        todo = new app.TodoApp.Todo();
        var newStatus = app.TodoApp.invertedStatuses()['New'];
        expect(todo.get('status')).to.eq(newStatus);
      });

      it('defaults title to "Todo!"', function() {
        todo = new app.TodoApp.Todo();
        expect(todo.get('title')).to.eq('Todo!');
      });
    });
  });

  describe('statuses', function () {
    context('.getIntStatus()', function () {
      it('gets int status', function () {
        expect(app.TodoApp.getIntStatus('New')).to.eq(1);
      });
      it('does not equal to other int statuses', function () {
        expect(app.TodoApp.getIntStatus('New')).not.to.eq(2);
      });
      it('does not get int status', function () {
        expect(app.TodoApp.getIntStatus('Cancelled')).to.deep.eql(NaN);
      });
    });

    context('.getTextStatus()', function () {
      it('gets text status', function () {
        expect(app.TodoApp.getTextStatus(1)).to.eq('New');
      });
      it('does not equal to other text statuses', function () {
        expect(app.TodoApp.getTextStatus(2)).not.to.eq('New');
      });
      it('does not get text status', function () {
        expect(app.TodoApp.getTextStatus(5)).to.be.undefined; /*jshint ignore:line*/
      });
    });
  });

  describe('util', function() {
    describe('.generateGID()', function() {
      it('is defined', function() {
        expect(util.generateGID).not.to.be.undefined;
      });
      it('returns String data', function() {
        expect(util.generateGID()).to.be.a('string');
      });
    });
  });
});
