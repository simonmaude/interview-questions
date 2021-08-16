import unittest


class TestMemoryKeyValueStoreGetMethod(unittest.TestCase):
    def test_get_with_key_match(self):
        # returns the value of the key
        pass

    def test_get_without_key_match(self):
        # returns the value null
        pass

    def test_get_non_string_key(self):
        # returns an error
        pass


class TestMemoryKeyValueStoreSetMethod(unittest.TestCase):
    def test_set_no_value(self):
        # sets the key to hold the string value
        # returns the string OK
        pass

    def test_set_key_with_value(self):
        # sets the key hold the string value
        # returns the string OK
        pass


class TestMemoryKeyValueStoreKeysMethod(unittest.TestCase):
    def test_keys_no_regex(self):
        # return all keys
        pass

    def test_keys_regex(self):
        # return matching keys
        pass
