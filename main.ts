namespace SpriteKind {
    export const Health = SpriteKind.create()
    export const NailSmith = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Soul = SpriteKind.create()
    export const StartMenu = SpriteKind.create()
    export const WanderingHusk = SpriteKind.create()
    export const Crawlids = SpriteKind.create()
    export const WH1 = SpriteKind.create()
    export const Bench = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const Aspid = SpriteKind.create()
    export const Claw = SpriteKind.create()
    export const Well = SpriteKind.create()
    export const Menupage = SpriteKind.create()
    export const Totem = SpriteKind.create()
    export const GeoBase = SpriteKind.create()
    export const Mantis = SpriteKind.create()
    export const Effects = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite11.x < mySprite.x) {
        LeftStagger()
    } else if (mySprite11.x > mySprite.x) {
        RightStagger()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Crawlids, function (sprite, otherSprite) {
    SoulBar += 1
    CrawlidHP += -1
    if (CrawlidHP == 0) {
        SoulBar += 1
        Quest += 0.5
        sprites.destroy(mySprite8, effects.disintegrate, 200)
        GeoCount += 5
    }
})
sprites.onOverlap(SpriteKind.Aspid, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (AspidHP == 4) {
        SoulBar += 1
        AspidHP += -1
        Aspids.setImage(assets.image`myImage4`)
        scene.cameraShake(3, 200)
        Aspids.setImage(assets.image`Aspids`)
        Aspids.follow(mySprite, 65)
    } else if (AspidHP == 3) {
        SoulBar += 1
        AspidHP += -1
        Aspids.follow(mySprite, 65)
    } else if (AspidHP == 2) {
        SoulBar += 1
        AspidHP += -1
        Aspids.setImage(assets.image`myImage4`)
        scene.cameraShake(2, 500)
        Aspids.setImage(assets.image`Aspids`)
        Aspids.follow(mySprite, 75)
    } else if (AspidHP == 1) {
        SoulBar += 1
        AspidHP += -1
        sprites.destroy(Aspids, effects.disintegrate, 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WanderingHusk, function (sprite, otherSprite) {
    if (mySprite9.x < mySprite.x) {
        LeftStagger()
    } else if (mySprite9.x > mySprite.x) {
        RightStagger()
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Idle Right`,
    500,
    true
    )
})
function SpriteProperties () {
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
    mySprite9.setFlag(SpriteFlag.GhostThroughWalls, false)
    mySprite10.setFlag(SpriteFlag.GhostThroughWalls, false)
    mySprite6.setPosition(39, 552)
    mySprite.setPosition(45, 210)
    mySprite.ay = 500
    mySprite9.setPosition(225, 210)
    mySprite10.setPosition(150, 353)
    mySprite9.ay = 500
    platformer.setCharacterAnimationsEnabled(mySprite9, true)
    ScreenGeo.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite4.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite3.setFlag(SpriteFlag.RelativeToCamera, true)
    mySprite11.setPosition(240, 527)
    Bench1.setPosition(325, 600)
    mySprite8.setPosition(240, 527)
    Chest.setPosition(470, 612)
    Aspids.setPosition(1075, 835)
    Well2.setPosition(755, 602)
    Well2.setScale(2, ScaleAnchor.Middle)
    ElderBug.setPosition(690, 622)
    Slynx.setPosition(1110, 224)
    MantisWarrior.setPosition(240, 1075)
}
function StartPage () {
    mySprite7 = sprites.create(assets.image`StartMenu`, SpriteKind.StartMenu)
    color.startFade(color.White, color.originalPalette, 2000)
    pauseUntil(() => controller.A.isPressed())
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite7, effects.disintegrate, 1)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NailSmith, function (sprite, otherSprite) {
    if (NSFound == 0) {
        GeoCount += 240
        Essence += 1
        NSFound += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spikes3`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.vy = -175
        Jump = true
    } else if (controller.B.isPressed() == false) {
        mySprite.vy = -137
        HP += -1
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Well, function (sprite, otherSprite) {
    if (Quest < 2.5) {
        game.showLongText("An old well, thought to be used as a main water source for Dirtmouth.", DialogLayout.Bottom)
        pause(5000)
    } else if (Quest == 3) {
        Quest += 0.5
        game.showLongText("???: Jump in and explore this dying kingdom.", DialogLayout.Bottom)
        Respawning()
        pause(5000)
    }
})
function LeftStagger () {
    mySprite.vx = 275
    mySprite.setImage(assets.image`KnightStaggeredLeft`)
    pause(275)
    HP += -1
    Hplostscreen = sprites.create(assets.image`crackHP`, SpriteKind.Effects)
    Hplostscreen.setFlag(SpriteFlag.RelativeToCamera, true)
    controller.moveSprite(mySprite, 0, 0)
    pause(500)
    controller.moveSprite(mySprite, 85, 0)
    sprites.destroy(Hplostscreen)
    mySprite.setImage(assets.image`StartRight`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spikes`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.vy = -175
        Jump = true
    } else if (controller.B.isPressed() == false) {
        mySprite.vy = -137
        HP += -1
        pause(100)
    }
})
function RightStagger () {
    mySprite.vx = -275
    mySprite.setImage(assets.image`KnightStaggeredRight`)
    pause(275)
    HP += -1
    Hplostscreen = sprites.create(assets.image`crackHP`, SpriteKind.Effects)
    Hplostscreen.setFlag(SpriteFlag.RelativeToCamera, true)
    controller.moveSprite(mySprite, 0, 0)
    pause(500)
    controller.moveSprite(mySprite, 85, 0)
    sprites.destroy(Hplostscreen)
    mySprite.setImage(assets.image`StartRight`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Aspid, function (sprite, otherSprite) {
    if (Aspids.x < mySprite.x) {
        LeftStagger()
    } else if (Aspids.x > mySprite.x) {
        RightStagger()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spikes0`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.vy = -175
        Jump = true
    } else if (controller.B.isPressed() == false) {
        mySprite.vy = -137
        HP += -1
        pause(100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Idle Left`,
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`WalkL`,
    150,
    true
    )
})
sprites.onOverlap(SpriteKind.WanderingHusk, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (mySprite.x < mySprite9.x) {
        mySprite9.vx = 300
        HuskHP += -1
        SoulBar += 1
        pause(100)
    } else if (mySprite.x > mySprite9.x) {
        mySprite9.vx = -300
        HuskHP += -1
        SoulBar += 1
        pause(100)
    }
})
function EverythingStarts () {
    AspidHP = 4
    Charm = 0
    CrawlidHP = 1
    BelflyHP = 2
    HuskHP = 4
    HuskHP2 = 3
    Essence = 0
    Jump = false
    HP = 4
    SoulBar = 0
    Spell = 0
    Nail = 0
    GeoCount = 0
    NSFound = 0
    Quest = 0
    MantisClaw = false
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    if (Essence == 0) {
        achievements.create("Going down for up.", 100, "Descending Steps", assets.image`DownAchievement`)
        Essence += 1
    } else {
        if (Essence > 0) {
            Essence += 0
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Jump1`,
        150,
        false
        )
        mySprite.vy = -205
        Jump = true
    } else {
        if (controller.up.isPressed() && Jump == true) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`Jump2`,
            150,
            false
            )
            mySprite.vy = -175
            Jump = false
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walkR`,
    150,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spikes2`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.vy = -175
        Jump = true
    } else if (controller.B.isPressed() == false) {
        mySprite.vy = -137
        HP += -1
        pause(100)
    }
})
function Respawning () {
    AspidHP = 4
    HuskHP = 4
    HuskHP2 = 3
    BelflyHP = 2
    CrawlidHP = 1
    mySprite8 = platformer.create(assets.image`Bug1`, SpriteKind.Crawlids)
    mySprite9 = platformer.create(assets.image`WanderingHusk`, SpriteKind.WanderingHusk)
    mySprite10 = platformer.create(assets.image`WanderingHusk`, SpriteKind.WH1)
    mySprite11 = sprites.create(assets.image`Belfly`, SpriteKind.Enemy)
    RespawnPositions()
}
function StartSprites () {
    mySprite = platformer.create(assets.image`StartRight`, SpriteKind.Player)
    mySprite4 = sprites.create(assets.image`Soul Asset`, SpriteKind.Soul)
    mySprite3 = sprites.create(assets.image`Hpbar`, SpriteKind.Health)
    mySprite5 = sprites.create(assets.image`Nailsmith`, SpriteKind.NailSmith)
    mySprite6 = sprites.create(assets.image`Snail Shaman`, SpriteKind.NPC)
    mySprite8 = platformer.create(assets.image`Bug1`, SpriteKind.Crawlids)
    mySprite9 = platformer.create(assets.image`WanderingHusk`, SpriteKind.WanderingHusk)
    mySprite10 = platformer.create(assets.image`WanderingHusk`, SpriteKind.WH1)
    mySprite11 = sprites.create(assets.image`Belfly`, SpriteKind.Enemy)
    Bench1 = sprites.create(assets.image`Bench`, SpriteKind.Bench)
    Chest = sprites.create(assets.image`Chest`, SpriteKind.chest)
    Aspids = sprites.create(assets.image`Aspids`, SpriteKind.Aspid)
    Well2 = sprites.create(assets.image`well`, SpriteKind.Well)
    ElderBug = sprites.create(assets.image`ElderBug`, SpriteKind.NPC)
    Slynx = sprites.create(assets.image`Belfly0`, SpriteKind.Totem)
    ScreenGeo = sprites.create(assets.image`BaseGeo`, SpriteKind.GeoBase)
    MantisWarrior = sprites.create(assets.image`MantisIdle`, SpriteKind.Mantis)
    SpriteProperties()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (BelflyHP == 2) {
        SoulBar += 1
        BelflyHP += -1
        mySprite11.setImage(assets.image`FlyingBelfly`)
        mySprite11.follow(mySprite)
        scene.cameraShake(2, 1500)
    } else if (BelflyHP == 1) {
        SoulBar += 1
        BelflyHP += -1
        mySprite11.follow(mySprite)
    } else if (BelflyHP == 0) {
        SoulBar += 1
        Quest += 0.5
        sprites.destroy(mySprite11, effects.disintegrate, 200)
        GeoCount += 10
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WH1, function (sprite, otherSprite) {
    if (mySprite10.x < mySprite.x) {
        LeftStagger()
    } else if (mySprite10.x > mySprite.x) {
        RightStagger()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spikes1`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.vy = -175
        Jump = true
    } else if (controller.B.isPressed() == false) {
        mySprite.vy = -137
        HP += -1
        pause(100)
    }
})
function RespawnPositions () {
    mySprite9.setPosition(225, 210)
    mySprite10.setPosition(150, 353)
    mySprite9.ay = 500
    mySprite11.setPosition(240, 527)
    mySprite8.setPosition(240, 527)
}
sprites.onOverlap(SpriteKind.WH1, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (mySprite.x < mySprite10.x) {
        mySprite10.vx = 300
        HuskHP2 += -1
        SoulBar += 1
        pause(100)
    } else if (mySprite.x > mySprite10.x) {
        mySprite10.vx = -300
        HuskHP2 += -1
        SoulBar += 1
        pause(100)
    }
    tiles.setWallAt(tiles.getTileLocation(6, 26), false)
})
let mySprite2: Sprite = null
let Shadow: Sprite = null
let projectile: Sprite = null
let mySprite5: Sprite = null
let MantisClaw = false
let Nail = 0
let Spell = 0
let HuskHP2 = 0
let BelflyHP = 0
let Charm = 0
let HuskHP = 0
let Hplostscreen: Sprite = null
let HP = 0
let Jump = false
let Essence = 0
let NSFound = 0
let mySprite7: Sprite = null
let MantisWarrior: Sprite = null
let Slynx: Sprite = null
let ElderBug: Sprite = null
let Well2: Sprite = null
let Chest: Sprite = null
let Bench1: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let ScreenGeo: Sprite = null
let mySprite6: Sprite = null
let mySprite10: platformer.PlatformerSprite = null
let mySprite9: platformer.PlatformerSprite = null
let Aspids: Sprite = null
let AspidHP = 0
let GeoCount = 0
let mySprite8: platformer.PlatformerSprite = null
let Quest = 0
let CrawlidHP = 0
let SoulBar = 0
let mySprite11: Sprite = null
let mySprite: platformer.PlatformerSprite = null
StartPage()
EverythingStarts()
StartSprites()
controller.moveSprite(mySprite, 85, 0)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`Hollownest`)
tiles.setWallAt(tiles.getTileLocation(6, 26), true)
game.onUpdate(function () {
    if (AspidHP <= 0) {
        SoulBar += 1
        AspidHP += -1
        sprites.destroy(Aspids, effects.disintegrate, 200)
        achievements.create("Weren't Primal Aspids extinct?", 100, "Mystery Uncovered", assets.image`DiscoveredAspids`)
        GeoCount += 10
        AspidHP = 4
    }
})
forever(function () {
    if (MantisClaw == true) {
        controller.moveSprite(mySprite, 0, 0)
        platformer.moveSprite(mySprite, true, 70)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, false)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.WallJumps, true)
    }
})
forever(function () {
    if (MantisClaw == true) {
        platformer.moveSprite(mySprite, true, 70)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnUpPressed, true)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.JumpOnAPressed, false)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.MovementMomentum, true)
        platformer.setFeatureEnabled(platformer.PlatformerFeatures.WallJumps, true)
    }
})
forever(function () {
    if (controller.A.isPressed() && (controller.right.isPressed() && (Charm == 0 && SoulBar >= 1))) {
        projectile = sprites.createProjectileFromSprite(assets.image`GhostRight`, mySprite, 200, 0)
        SoulBar += -1
        pause(1000)
        sprites.destroy(projectile)
    } else if (controller.A.isPressed() && (controller.left.isPressed() && (Charm == 0 && SoulBar >= 1))) {
        projectile = sprites.createProjectileFromSprite(assets.image`GhostLeft`, mySprite, -200, 0)
        SoulBar += -1
        pause(1000)
        sprites.destroy(projectile)
    } else {
        if (controller.A.isPressed() && ((controller.left.isPressed() || controller.right.isPressed()) && (Quest < 1 || SoulBar < 1))) {
            pause(2000)
        }
    }
})
forever(function () {
    if (controller.A.isPressed() && (controller.left.isPressed() && (Charm == 1 && SoulBar >= 2))) {
        SoulBar += -2
        Shadow = sprites.createProjectileFromSprite(assets.image`SharpShadowAttack`, mySprite, -550, 0)
        pause(1000)
    } else if (controller.A.isPressed() && (controller.right.isPressed() && (Charm == 1 && SoulBar >= 2))) {
        SoulBar += -2
        Shadow = sprites.createProjectileFromSprite(assets.image`SharpShadowAttack0`, mySprite, 550, 0)
        pause(1000)
    }
    pause(100)
    sprites.destroy(Shadow)
    pause(300)
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, mySprite9) <= 4) {
        mySprite9.vy = -10
    } else if (spriteutils.distanceBetween(mySprite, mySprite9) <= 4 && false) {
    	
    }
})
game.onUpdate(function () {
    if (BelflyHP < 2) {
        if (Math.abs(mySprite.x - mySprite11.x) > 2) {
            if (mySprite.x < mySprite11.x) {
                mySprite11.setImage(assets.image`myImage2`)
                mySprite11.follow(mySprite)
            } else if (mySprite.x > mySprite11.x) {
                mySprite11.follow(mySprite)
                mySprite11.setImage(assets.image`myImage1`)
            }
        }
    } else {
        Quest += 0
    }
})
game.onUpdate(function () {
    if (HuskHP <= 0) {
        sprites.destroy(mySprite9, effects.disintegrate, 100)
        GeoCount += 20
        HuskHP = 4
    }
})
game.onUpdate(function () {
    if (Quest == 3) {
        tiles.setCurrentTilemap(tilemap`HollownestDirtmouth`)
    }
})
forever(function () {
    if (HP == 5) {
        mySprite3.setImage(assets.image`FullHP1`)
    } else {
        if (HP == 4) {
            mySprite3.setImage(assets.image`FullHP`)
        } else {
            if (HP == 3) {
                mySprite3.setImage(assets.image`3hp`)
            } else {
                if (HP == 2) {
                    mySprite3.setImage(assets.image`2hp`)
                } else {
                    if (HP == 1) {
                        mySprite3.setImage(assets.image`1hp`)
                    } else {
                        mySprite3.setImage(assets.image`dead`)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (mySprite.overlapsWith(Chest)) {
        scene.cameraShake(2, 350)
        Chest.setImage(assets.image`OpenedChest`)
        Chest.setPosition(470, 609)
        pause(100)
        achievements.create("Slash faster/longer.", 100, "Quick Slash", assets.image`QuickSlash`)
        pauseUntil(() => Quest == 5)
    }
})
forever(function () {
    if (mySprite.overlapsWith(mySprite10)) {
        if (mySprite10.x < mySprite.x) {
            mySprite.vx = 300
            pause(100)
            HP += -1
        } else if (mySprite10.x > mySprite.x) {
            mySprite.vx = -300
            pause(100)
            HP += -1
        }
    }
})
forever(function () {
    if (mySprite.overlapsWith(Bench1)) {
        pause(1000)
        animation.runImageAnimation(
        mySprite,
        assets.animation`SittingRight`,
        500,
        true
        )
        mySprite.setPosition(Bench1.x, Bench1.y - 11)
        sprites.destroy(Bench1)
        pauseUntil(() => controller.anyButton.isPressed())
        if (controller.anyButton.isPressed()) {
            Bench1 = sprites.create(assets.image`Bench`, SpriteKind.Bench)
            Bench1.setPosition(325, 600)
            pause(2000)
        }
        pause(200)
    }
    pause(200)
})
game.onUpdate(function () {
    if (Math.abs(mySprite.x - MantisWarrior.x) > 2) {
        if (mySprite.x < MantisWarrior.x) {
            MantisWarrior.vx = 45 * -1
            animation.runImageAnimation(
            MantisWarrior,
            assets.animation`MantisProvokedLeft`,
            95,
            true
            )
        } else if (mySprite.x > MantisWarrior.x) {
            MantisWarrior.vx = 45
            animation.runImageAnimation(
            MantisWarrior,
            assets.animation`MantisProvokedRight`,
            95,
            true
            )
        }
    } else {
        MantisWarrior.vx = 0
    }
})
game.onUpdate(function () {
    if (Math.abs(mySprite.x - mySprite10.x) > 2) {
        if (mySprite.x < mySprite10.x) {
            mySprite10.vx = 45 * -1
            animation.runImageAnimation(
            mySprite10,
            assets.animation`WanderingHuskLeft`,
            175,
            true
            )
        } else if (mySprite.x > mySprite10.x) {
            mySprite10.vx = 45
            animation.runImageAnimation(
            mySprite10,
            assets.animation`WanderingHuskRight`,
            175,
            true
            )
        }
    } else {
        mySprite10.vx = 0
    }
})
game.onUpdate(function () {
    if (Math.abs(mySprite.x - mySprite8.x) > 2) {
        if (mySprite.x < mySprite8.x) {
            mySprite8.vx = 45 * -1
            mySprite8.setImage(assets.image`Bug1`)
        } else if (mySprite.x > mySprite8.x) {
            mySprite8.vx = 45
            mySprite8.setImage(assets.image`Bug0`)
        }
    } else {
        mySprite8.vx = 0
    }
})
game.onUpdate(function () {
    if (Math.abs(mySprite.x - mySprite9.x) > 2) {
        if (mySprite.x < mySprite9.x) {
            mySprite9.vx = 45 * -1
            animation.runImageAnimation(
            mySprite9,
            assets.animation`WanderingHuskLeft`,
            175,
            true
            )
        } else if (mySprite.x > mySprite9.x) {
            mySprite9.vx = 45
            animation.runImageAnimation(
            mySprite9,
            assets.animation`WanderingHuskRight`,
            175,
            true
            )
        }
    } else {
        mySprite9.vx = 0
    }
})
game.onUpdate(function () {
    if (Math.abs(mySprite.x - Aspids.x) > 2) {
        if (mySprite.x < Aspids.x) {
            Aspids.follow(mySprite, 75)
            animation.runImageAnimation(
            Aspids,
            assets.animation`Idle Aspid`,
            250,
            true
            )
        } else if (mySprite.x > Aspids.x) {
            Aspids.follow(mySprite, 75)
            animation.runImageAnimation(
            Aspids,
            assets.animation`Idle Aspid2`,
            250,
            true
            )
        }
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        mySprite2 = sprites.create(assets.image`Slashright`, SpriteKind.Projectile)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.follow(mySprite, 1500)
        if (controller.B.isPressed() && controller.right.isPressed()) {
            animation.runImageAnimation(
            mySprite2,
            assets.animation`Slashes right`,
            95,
            false
            )
            animation.runImageAnimation(
            mySprite,
            assets.animation`SlashRight`,
            75,
            false
            )
        } else {
            if (controller.B.isPressed() && controller.left.isPressed()) {
                animation.runImageAnimation(
                mySprite2,
                assets.animation`Slashes left`,
                95,
                false
                )
                animation.runImageAnimation(
                mySprite,
                assets.animation`SlashLeft`,
                75,
                false
                )
            }
        }
        pause(100)
        sprites.destroy(mySprite2)
        pause(200)
    }
})
forever(function () {
    if (NSFound == 1) {
        pause(100)
        achievements.create("Old Nail Acquired.", 100, "Old Nail", assets.image`Old Nail`)
        NSFound += 1
        GeoCount += 240
    } else {
        if (Nail == 1 && NSFound == 2) {
            pause(5000)
            achievements.create("Sharpened Nail Acquired.", 100, "Sharpened Nail", assets.image`Reforged Nail`)
            NSFound += 1
        } else {
            if (Nail == 2 && NSFound == 3) {
                pause(10000)
                achievements.create("Channeled Nail Acquired.", 100, "Channeled Nail", assets.image`Channeled Nail`)
                NSFound += 1
            } else {
                if (Nail == 3 && NSFound == 4) {
                    pause(15000)
                    achievements.create("Coiled Nail Acquired.", 100, "Coiled Nail", assets.image`Coiled Nail`)
                    NSFound += 1
                } else {
                    if (Nail == 4 && NSFound == 5) {
                        pause(20000)
                        achievements.create("Pure Nail Acquired.", 100, "Purest Form", assets.image`Coiled Nail`)
                        Essence += 2
                        NSFound += 1
                    } else {
                        if (Nail == 6 && NSFound == 6) {
                            pause(25000)
                            achievements.create("„˙å†¿ ˆµµπøßˆ∫¬´", 100, "Void and Shadow", assets.image`Abyssal Nail`)
                            Essence += 3
                            NSFound += 1
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (SoulBar >= 4) {
        mySprite4.setImage(assets.image`Full Soul`)
    } else {
        if (SoulBar == 3) {
            mySprite4.setImage(assets.image`Almost full Soul`)
        } else {
            if (SoulBar == 2) {
                mySprite4.setImage(assets.image`Half Soul`)
            } else {
                if (SoulBar == 1) {
                    mySprite4.setImage(assets.image`Low Soul`)
                } else {
                    if (SoulBar <= 0) {
                        mySprite4.setImage(assets.image`hpbar`)
                    }
                }
            }
        }
    }
})
game.onUpdate(function () {
    if (CrawlidHP <= 0) {
        SoulBar += 1
        CrawlidHP += -1
        sprites.destroy(mySprite8, effects.disintegrate, 200)
        GeoCount += 5
        CrawlidHP = 1
    }
})
forever(function () {
    if (HP == 0) {
        color.startFade(color.originalPalette, color.White, 2000)
        pause(1000)
        if (Quest > 1) {
            mySprite.setPosition(Bench1.x, Bench1.y - 7)
            color.startFade(color.White, color.originalPalette, 2000)
            HP = 4
        } else {
            game.gameOver(false)
            pause(100)
        }
    }
})
forever(function () {
    if (mySprite.overlapsWith(mySprite6) && Quest == 0) {
        game.showLongText("Snail Shaman: Golly! You're strong, yet possesses no spells. Here, I'll give you one of my own nasty creations. It's perfect for a creature like you! Don't move now.", DialogLayout.Bottom)
        scene.cameraShake(4, 5000)
        Spell += 1
        pause(100)
        Quest += 1
        achievements.create("Press Button A to conjure a ghost spell.", 100, "New Spell", assets.image`GhostLogo`)
        game.showLongText("Snail Shaman: Kill the Crawlid for a reward!", DialogLayout.Bottom)
    } else {
        if (mySprite.overlapsWith(mySprite6) && Quest == 1.5) {
            game.showLongText("Snail Shaman: Thanks for clearing the monsters with my spell! Here's 240 Geo as a reward.", DialogLayout.Bottom)
            GeoCount += 240
            game.showLongText("Snail Shaman: Kill the Belfly for a reward.", DialogLayout.Bottom)
            Quest += 0.5
        } else if (mySprite.overlapsWith(mySprite6) && Quest == 2.5) {
            game.showLongText("Snail Shaman: You get the job done fast! Here's another charm as a reward.", DialogLayout.Bottom)
            HP = 5
            Quest += 0.5
            Charm += 1
            achievements.create("Monster awakened.", 100, "Sharp Void", assets.image`Sharp Void`)
            pause(5000)
        } else {
            if (mySprite.overlapsWith(mySprite6) && Quest >= 3) {
                game.showLongText("Snail Shaman: Hey there! Good to see you again!", DialogLayout.Bottom)
                pause(5000)
            }
        }
    }
})
forever(function () {
    if (mySprite.overlapsWith(ElderBug) && Quest <= 1) {
        game.showLongText("Elderbug: *sigh* You aren't ready yet, young one.", DialogLayout.Bottom)
        pauseUntil(() => mySprite.overlapsWith(ElderBug) && Quest > 2.5)
    } else if (mySprite.overlapsWith(ElderBug) && Quest >= 3) {
        game.showLongText("Elderbug: Jump in the well and cleanse this fallen kingdom, knight.", DialogLayout.Bottom)
        pause(5000)
    }
})
forever(function () {
    if (mySprite.overlapsWith(mySprite5) && NSFound >= 1) {
        game.showLongText("NailSmith: I can strengthen and upgrade your Nail.", DialogLayout.Bottom)
        pauseUntil(() => controller.A.isPressed())
        if (controller.A.isPressed()) {
            if (Nail == 0 && GeoCount >= 50) {
                game.showLongText("NailSmith: Done, easy as a pie. Enjoy your Old Nail.", DialogLayout.Bottom)
                Nail += 1
                GeoCount += -50
            } else {
                if (Nail == 1 && GeoCount >= 240) {
                    game.showLongText("NailSmith: Bam! Back it goes. There's your Sharpened Nail.", DialogLayout.Bottom)
                    Nail += 1
                    GeoCount += -240
                } else {
                    if (Nail == 2 && GeoCount >= 557) {
                        game.showLongText("NailSmith: Your Channeled Nail will be done in 5 seconds.", DialogLayout.Bottom)
                        pause(5000)
                        Nail += 1
                        game.showLongText("NailSmith: Done, have fun with it!", DialogLayout.Bottom)
                        GeoCount += -557
                        if (Nail == 3 && GeoCount >= 2375) {
                            game.showLongText("NailSmith: Gimme 15 seconds to forge your Coiled Nail.", DialogLayout.Bottom)
                            pause(15000)
                            Nail += 1
                            game.showLongText("NailSmith: There's your Coiled Nail.", DialogLayout.Bottom)
                            GeoCount += -2375
                        } else {
                            if (Nail == 4 && GeoCount >= 2555) {
                                game.showLongText("NailSmith: Gimme 30 seconds to forge your Pure Nail.", DialogLayout.Bottom)
                                pause(30000)
                                Nail += 1
                                game.showLongText("NailSmith: Done, have fun with it!", DialogLayout.Bottom)
                                GeoCount += -2555
                            } else {
                                if (Nail > 4) {
                                    game.showLongText("NailSmith: That's all there is to upgrade. Visit the Abyssal Nailsmith.", DialogLayout.Bottom)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left) && MantisClaw == true) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`WallhangLeft`,
        5000,
        false
        )
        Jump = true
    } else if (mySprite.isHittingTile(CollisionDirection.Right) && MantisClaw == true) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`WallhangRight`,
        5000,
        false
        )
        Jump = true
    }
})
forever(function () {
    if (spriteutils.distanceBetween(mySprite, mySprite9) <= 5 && mySprite9.isHittingTile(CollisionDirection.Bottom)) {
        mySprite9.follow(mySprite, 65)
        if (platformer.hasState(mySprite9, platformer.PlatformerSpriteState.FacingLeft) && spriteutils.distanceBetween(mySprite, mySprite9) <= 6) {
            animation.runImageAnimation(
            mySprite9,
            assets.animation`WanderingHuskLeft`,
            200,
            true
            )
        }
    }
})
game.onUpdate(function () {
    if (HuskHP2 == 0) {
        sprites.destroy(mySprite10, effects.disintegrate, 100)
        GeoCount += 15
        HuskHP2 = 3
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        if (SoulBar >= 1 && HP <= 3) {
            SoulBar += -1
            animation.runImageAnimation(
            mySprite,
            assets.animation`HealingSoul`,
            95,
            false
            )
            HP += 1
            pause(500)
        }
    }
})
