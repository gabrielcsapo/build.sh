- [ ] capture any changes that weren't committed to git
- [ ] document and test using build.sh as a module
- [ ] add the option to to take in a build.json file and generate a report from that
- [ ] generate a multi line pipeline
  ```
     ─┬─install─┬─lint─┬─coverage─┬─test──docs
      |         |      |          |
      └──npm────┘      └──upload──┘
  ```
