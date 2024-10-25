package com.github.jakubiec.copyright

import org.scalatest.matchers.should.Matchers
import org.scalatest.wordspec.AnyWordSpec

class HelloSpec extends AnyWordSpec with Matchers {

  "The Hello object" should {
    "say hello" in {
      Hello.greeting shouldBe "hello"
    }
  }
}
