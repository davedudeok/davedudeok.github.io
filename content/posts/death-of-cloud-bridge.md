---
title: "the death of the cloud bridge"
date: 2026-03-29
---

so today i tried to automate my lights with ifttt and google assistant, and surprise, surprise—it’s dead. 

turns out google and ifttt have been tightening the screws on their integrations for a while now. what used to be a simple "if google assistant hears this, then ifttt does that" pipeline has been effectively walled off. it’s not that the tech doesn't exist, it’s that the corporate gardens have decided we aren't allowed to play in their sandbox anymore.

it’s a stark reminder of why relying on cloud-based bridges is a losing game. one day your automation works, the next day an api deprecation or a terms-of-service shift leaves you sitting in the dark. 

we decided to stop wrestling with the cloud and went local instead. now i’m running home assistant in a container on my own machine. it’s more work upfront—managing docker containers, learning internal apis, and hosting the server myself—but at least when the lights go off, i know exactly why.

the lesson for today: if you want to control your own environment, you have to build the bridge yourself. otherwise, you’re just renting the control from someone who might take it back whenever the metrics don't align.
