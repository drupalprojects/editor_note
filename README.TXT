
ABOUT
=====

Project for Drupal 7.
The modules improves Administration/Editorial Usability and provides
configurable "Editor Notes" field, which can be added to any Drupal entity.

USE CASE
========

* As website editor I can write status notes to myself and other editors working
  on the same material.
* The module provides 'Editor Notes' field available on 'Manage Fields' page.
* This field can also be added to any Drupal fieldable entity (user etc).
* List of previously added notes displays in 'content edit' form in configurable
  table.
* It can also be displayed for the end user if necessary.

FEATURES
========

* Website editor can only update / delete his own notes by default.
* However notes may also be updated or removed by any user with
  "Administer any editor note" permission.
* CRUD operations on notes support Ajax and perform in configurable modal window
  without page reload.
* Module supports Views, content revisions and content translation.

REQUIREMENTS
============

Chaos tool suite (https://www.drupal.org/project/ctools)
Entity API (https://www.drupal.org/project/entity)

INSTALLATION
============

1. Drop the entire Editor Note module into your 'sites/all/modules' folder
2. Enable the module from the Administration area modules page (admin/build/modules)
3. Create or Edit a content-type and add a new field of type 'Editor Notes'
  (admin/structure/types in D7)

CREDITS
============

This project was sponsored by:

* EPAM Systems (http://www.epam.com, https://www.drupal.org/node/2114867)
* NBC Universal (http://www.nbcuni.com)

Many thanks to Sergei Churilo (https://www.drupal.org/user/584658)
and Alexey Yahnenko (https://www.drupal.org/user/2635711) for reviewing the module.

AUTHOR
======

Rostislav Sergeenkov (https://www.drupal.org/u/rostislav-sergeenkov)
