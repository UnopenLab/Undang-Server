import os.path


def test_travis_yml_exist():
    travis_yml_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    assert os.path.isfile(travis_yml_path+"/.travis.yml")