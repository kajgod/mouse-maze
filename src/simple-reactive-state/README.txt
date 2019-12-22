SIMPLE REACTIVE STATE

SRS is a simple state manager for web applications designed to be simple, safe, and FAST.
Targeted usages are not large React apps (although it can and was used with React), but rather for preformance-critical SPA such as games, RTA systems and the like.

USAGE: 

import state, { setConst, getConst,... } from "./PATH-TO-DIRECTORY/simple-reactive-state";

You can access all of the functions from single import (e.g."state"), or import them by name.
In the above example, state.setConst("name", value) is equivalent to setConst("name", value).

The most important part of SRS are SIDEEFFECTS. It is crucial to understand them well.

API:

=== setConst(name, val) ===
Sets a constant (IMPORTANT: deep frozen if object).

=== getConst(name) ===
Returns the value previously set or undefined.

**************************************
CHANGES:

Version 0.1

