## v0.14.1
#### 2020-07-20

### Download
 - https://github.com/vmware-tanzu/octant/releases/v0.14.1

### Bug Fixes
  * Fixed bug where `--kubeconfig` flag does not work (#1133, @wwitzel3)
  * Fixed bug where the client would request from the loading API with a valid kubeconfig (#1133, @wwitzel3)
  * Changed breadcrumb link color in dark mode (#1134, @mklanjsek)

## v0.14.0
#### 2020-07-15

### Download
 - https://github.com/vmware-tanzu/octant/releases/v0.14.0

### Highlights
  * Added creation of resources
  * Added port forwarding for services
  * Added support for starting without a kubeconfig
  * Added experimental JavaScript plugin support

### All Changes
  * Added data grid column filtering (#986, @sergiupantiru)
  * Added experimental JavaScript plugin support (#1080, @wwitzel3)
  * Added port forwarding for services (#1093, @ipsi)
  * Added Apply YAML to current cluster and namespace (#954, @scothis)
  * Updated cronjob trigger to action grid; added suspend and resume (#1087, @GuessWhoSamFoo)
  * Added ability to start without a kubeconfig (#991, @GuessWhoSamFoo)
  * Fixed navigation bar flyouts when collapsed (#1007, @scothis)
  * Added delete object to namespace list (#1026, @GuessWhoSamFoo)
  * Added support for an ingress to have `use-annotation` ServicePort (#988, @GuessWhoSamFoo)
  * Added spinner when content is not ready (#506, @nfarruggiagl)
  * Fixed cytoscape component to clean up styles when destroyed (#982, @GuessWhoSamFoo)
  * Added sorting for Age columns
  * Upgraded all JavaScript dependencies to latest
  * Upgraded all Go dependencies to latest
  * Updated build.go to use Cobra for improved useability
  * Added Storybook (see: https://reference.octant.dev)
  * Fixed multiple owner references in objects
  * Updated dashboard.proto to avoid name conflict
  * Removed old CI/CD mentions and plugin docs
  * Updated readme and demo gif
  * Added delete action for namespace list
  * Improved flickering and namespace transitions
  * Added CRDs in cluster overview
  * Fixed light theme selected navigation color
