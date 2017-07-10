<?php

/**
 * @file
 * Hooks provided by the Editor Notes module.
 */

/**
 * Hook is to allow other modules to alter the formatted notes
 * before they are rendered.
 *
 * For example, if I wanted to display the note's author picture
 * I would use custom hook_editor_note_format_notes_alter() to add this.
 *
 * @return
 *   Renderable array of Editor notes.
 */
function hook_editor_note_format_notes_alter($notes) {

}
