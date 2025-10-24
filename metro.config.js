const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

// Enable package exports for select libraries
const resolveRequestWithPackageExports = (context, moduleName, platform) => {
  // Package exports in `isows` (a `viem`) dependency are incompatible, so they need to be disabled
  if (moduleName === 'isows') {
    const ctx = {
      ...context,
      unstable_enablePackageExports: false,
    }
    return ctx.resolveRequest(ctx, moduleName, platform)
  }

  // Package exports in `zustand@4` are incompatible, so they need to be disabled
  if (moduleName.startsWith('zustand')) {
    const ctx = {
      ...context,
      unstable_enablePackageExports: false,
    }
    return ctx.resolveRequest(ctx, moduleName, platform)
  }

  // Package exports in `jose` are incompatible, so the browser version is used
  if (moduleName === 'jose') {
    const ctx = {
      ...context,
      unstable_conditionNames: ['browser'],
    }
    return ctx.resolveRequest(ctx, moduleName, platform)
  }

  return context.resolveRequest(context, moduleName, platform)
}

config.resolver.resolveRequest = resolveRequestWithPackageExports

module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 })
