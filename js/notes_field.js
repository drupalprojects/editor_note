(function ($) {
  Drupal.behaviors.notesField = {
    attach: function(context) {
      // @todo notesFieldName will not work for 2 field of note_field type in one form.
      var notesFieldName = Drupal.settings.notesFieldName;
      var notesFieldLang = Drupal.settings.notesFieldLang;

      $('a.edit-note').click(function() {
        // @todo drupal_html_id better than classes, because node can contain multiple note fields.
        var delta = $(this).attr('data-delta');
        var noteTrSelector = 'tr.note-' + delta;
        var noteHiddenName = notesFieldName + '[' + notesFieldLang + '][' + delta + '][note]';
        var noteValue = $(noteTrSelector).find('input[name="' + noteHiddenName + '"]').val();
        $('textarea.add-note').val(noteValue);
        $('input[name="' + notesFieldName + '_save_note"]').val(Drupal.t('Update Note'));
        return false;
      })

      $('input.' + notesFieldName + '_save_note').click(function() {
        // @todo validate on empty value first.
        // @todo then check if it is add or it is edit mode.
        $(this).val(Drupal.t('Add Note'));
      })

      $('a.remove-note').click(function() {
        var delta = $(this).attr('data-delta');
        var noteTrSelector = 'tr.note-' + delta;
        var noteHiddenName = notesFieldName + '[' + notesFieldLang + '][' + delta + '][note]';
        $('input[name="' + noteHiddenName + '"]').val('');
        $(noteTrSelector).addClass('element-invisible');
          // @todo rebuild after that odd|even classes
//        var tr = $(noteTrSelector).parent().find('tr');
//        tr.each(function() {
//          this.removeClass('odd', 'even');
//          this.toggleClass();
//        })
        return false;
      })
    }
  }
})(jQuery);
