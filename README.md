About
-----

Project for Drupal 7.
The modules improves administration/editorial usability and provides
configurable "Editor Notes" field, which can be added to any Drupal entity.

In general concept of 'Editor Notes' is similar to 'Comments'. The main difference
is that 'Editor Notes' are for editors and admins rather than for end users.

Use case
--------

* As website editor I can write status notes to myself and other editors working
  on the same material.
* The module provides 'Editor Notes' field available on 'Manage Fields' page.
* This field can also be added to any Drupal fieldable entity (user etc).
* List of previously added notes displays in 'content edit' form in configurable
  table.
* Notes can also be displayed for the end user in configurable table if necessary.

Features
--------

* Website editor can only add / update / delete his own notes by default.
* However notes may also be updated or removed by any user with
  "Administer any editor note" permission.
* CRUD operations on notes support Ajax and perform in configurable modal window
  without page reload.
* Module supports Views, content revisions and content translation.

Requirements
------------

* [Chaos tool suite]
* [Entity API]

Installation
------------

1. Drop the entire Editor Note module into your 'sites/all/modules' folder.
2. Enable the module from the Administration area modules page (admin/modules).
3. Create new or edit existing content type and add a new field of type
   'Editor Notes' (admin/structure/types in D7).

Sponsorship
-----------

This project was sponsored by:

* [EPAM Systems]
* [NBC Universal]

Acknowledgments
---------------

Special thanks to [Sergei Churilo] and [Alexey Yahnenko] for reviewing the module.

Author
------

[Rostislav Sergeenkov]


[Chaos tool suite]:https://www.drupal.org/project/ctools
[Entity API]:https://www.drupal.org/project/entity
[EPAM Systems]:https://www.drupal.org/node/2114867
[NBC Universal]:http://www.nbcuni.com
[Sergei Churilo]:https://www.drupal.org/user/584658
[Alexey Yahnenko]:https://www.drupal.org/user/2635711
[Rostislav Sergeenkov]:https://www.drupal.org/u/rostislav-sergeenkov
