# Getting Started with Faktory in JavaScript

Faktory is designed to be as easy as possible for developers to run and
use.

## Installation

You can use Homebrew to install Faktory on macOS.

```
brew tap contribsys/faktory
brew install faktory
```

Upgrade to the latest version in the future with `brew upgrade faktory`.


## Running the Example

1. For this example, we will need to start Faktory first.


```
faktory
```

2. Now start a client process pushing a new job to Faktory every second.

```
node ./fclient.js
```

Lastly start a worker process which fetches jobs from Faktory and
executes them:

```
node ./fworker.js
```

## Dependencies

Faktory itself has very few dependencies but this example assumes you
have a modern Node runtime installed. Run one of:

```
brew install node
brew upgrade node
```
