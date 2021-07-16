require 'rspec'

describe "MemoryKeyValueStore" do
  describe "#get" do
    context "with a matching key" do
      it "gets the value of key"
    end

    context "without a matching key" do
      it "returns the special value nil"
    end

    context "with a non-string value" do
      it "returns an error"
    end
  end

  describe "#set" do
    context "when they key does not hold a value" do
      it "sets the key to hold the string value"
      it "returns OK"
    end

    context "when they key already holds a value" do
      it "sets the key to hold the string value"
      it "returns OK"
    end
  end

  describe "#keys" do
    it "returns all keys matching regex pattern"
  end
end
