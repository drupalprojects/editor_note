/**
 * @file
 * Attaches the behaviors for the Editor Notes field.
 */
(function ($) {
  /**
   * Alters pager links if pager is present in Editor Notes.
   * Depends on Fieldgroup (field_group) module, https://www.drupal.org/project/field_group.
   *
   * Adds fragment (#) to the pager links providing an option to remember and restore
   * active tab after page reload when navigating between pager links.
   *
   * The problem arises because theme_pager() doesn't support fragment for some reasons.
   * Alternative idea is to override theme_pager() and other nested theme functions
   * and add support for fragment there.
   *
   * @see similar issue related to Drupal 8, https://www.drupal.org/node/1293912.
   */
  Drupal.behaviors.editorNoteAlterPager = {
    attach: function (context, settings) {
      var editorNoteContainer = '#' + Drupal.settings.editorNoteContainer;
      $(editorNoteContainer + ' .pager li a').each(function() {
        var pagerLinkPath = $(this).attr('href');
        if (pagerLinkPath !== undefined && pagerLinkPath !== '' && !(pagerLinkPath.indexOf(editorNoteContainer) + 1)) {
          pagerLinkPath += editorNoteContainer;
          $(this).attr('href', pagerLinkPath);
        }
      })
    }
  };
})(jQuery);
