xcode-select --install

# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby
brew install ruby

# If you're using Zsh
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc

which ruby
# /usr/local/opt/ruby/bin/ruby

ruby -v
# ruby 2.7.2p137 (2020-10-01 revision 5445e04352)

gem install --user-install bundler jekyll

# If you're using Zsh
echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.zshrc

# sudo gem install bundler
# sudo gem install -n /usr/local/bin/ jekyll

# cd blog
bundle add webrick
bundle exec jekyll serve